const { model, Schema } = require("mongoose");

const keyboardPropertiesSchema = new Schema({
  caseWeight: String, //Schema.Types.Decimal128,
  plateMaterials: [String],
  layout: [String],
  caseColors: [String],
  typingAngle: String, //Schema.Types.Decimal128,
});

const linksSchema = new Schema({
  keyboardInformation: String,
  images: String,
});

const vendorSchema = new Schema({
  US: String,
});

const keyboardsSchema = new Schema({
  basePrice: String, //Schema.Types.Decimal128,
  designer: String,
  endDate: String,
  images: [String],
  keyboardProperties: keyboardPropertiesSchema,
  links: linksSchema,
  name: String,
  saleType: String,
  startDate: String,
  vendor: vendorSchema,
});

module.exports = model("Keyboards", keyboardsSchema);
