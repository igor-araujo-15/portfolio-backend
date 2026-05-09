const Project = require('../models/Project');

exports.listEntries = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

exports.getEntryById = async (req, res) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return res.status(404).json({ message: 'Projeto não encontrado.' });
  }

  res.json(project);
};

exports.createEntry = async (req, res) => {
  const project = await Project.create(req.body);
  res.status(201).json(project);
};

exports.updateEntry = async (req, res) => {
  const project = await Project.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
      runValidators: true
    }
  );

  if (!project) {
    return res.status(404).json({ message: 'Projeto não encontrado.' });
  }

  res.json(project);
};

exports.deleteEntry = async (req, res) => {
  const project = await Project.findByIdAndDelete(req.params.id);

  if (!project) {
    return res.status(404).json({ message: 'Projeto não encontrado.' });
  }

  res.json({ message: 'Projeto removido com sucesso.' });
};