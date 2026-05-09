const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema(
  {
    titulo: { type: String, required: true, trim: true },
    descricao: { type: String, required: true, trim: true },
    tecnologia: { type: String, required: true, trim: true },
    repositorio: { type: String, required: true, trim: true }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Project', projectSchema);