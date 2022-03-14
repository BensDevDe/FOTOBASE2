const express = require("express");
const UserModel = require("../models/UserModel");
const { ImageModel } = require("../models/ImageModel");

exports.fotoController = async (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;
  const skip = (page - 1) * limit;
  const fotoList = await ImageModel.find()
    .lean()
    .skip(skip)
    .limit(limit)
    .populate({
      path: "added_by",
      select: "-password",
    });

  if (!fotoList) {
    return res.status(404).json({ msg: "no fotos yet" });
  }
  return res
    .status(200)
    .json({ msg: "foto list", count: fotoList.length, fotoList });
};

exports.sortController = async (req, res) => {
  const page = req.query.page;
  const limit = req.query.limit;
  const skip = (page - 1) * limit;
  const fotoList = await ImageModel.find()
    .sort({ title: 1 })
    .lean()
    .skip(skip)
    .limit(limit)

    .populate({
      path: "added_by",
      select: "-password",
    });

  console.log(fotoList);
  if (!fotoList) {
    return res.status(404).json({ msg: "no fotos yet" });
  }
  return res
    .status(200)
    .json({ msg: "foto list", count: fotoList.length, fotoList });
};
