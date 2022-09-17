const axios = require("axios");
const { generateError } = require("../helper");

exports.getLocationById = async (req, res) => {
    try {
        const { id } = req.body;

        if (id === undefined) throw generateError("Not Acceptable", "body is empty");

        const dataDummy = await axios.get("https://kasirpintar.co.id/allAddress.txt");
        const data = dataDummy.data;

        const allData = [...data.address_kecamatan, ...data.address_provinsi, ...data.address_kelurahan, ...data.address_kota];
        const result = allData.filter(d => d.id === id)[0];

        if (result === undefined) throw generateError("Not Found", "data not found");

        res.status(200).json({ message: "success get location", data: { ...result } });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

exports.getLocationByKotaId = async (req, res) => {
    try {
        const { kota_id } = req.body;

        if (id === undefined) throw generateError("Not Acceptable", "body is empty");

        const dataDummy = await axios.get("https://kasirpintar.co.id/allAddress.txt");
        const data = dataDummy.data;

        const allData = [...data.address_kecamatan, ...data.address_provinsi, ...data.address_kelurahan, ...data.address_kota];
        const result = allData.filter(d => d.kota_id === kota_id);

        if (result === undefined) throw generateError("Not Found", "data not found");

        res.status(200).json({ message: "success get location", data: result });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};