const { Module, ModuleSchema } = require('./module.model');
const { Action, ActionSchema } = require('./action.model');
const { Role, RoleSchema } = require('./role.model');
const { RoleAction, RoleActionSchema } = require('./roleaction.model');
const { User, UserSchema } = require('./user.model');
const { AudioVisualProductList, AudioVisualProductListSchema } = require('./audiovisualproductlist.model');
const { TypeAudioVisualProduct, TypeAudioVisualProductSchema } = require('./typeaudiovisualproduct.model');
const { CategoryAudioVisualProduct, CategoryAudioVisualProductSchema } = require('./categoryaudiovisualproduct.model');
const { AudioVisualProduct, AudioVisualProductSchema } = require('./audiovisualproduct.model');
const { ItemAudioVisualList, ItemAudioVisualListSchema } = require('./itemaudiovisuallist.model');


function setupModels(sequelize) {
  Module.init(ModuleSchema, Module.config(sequelize));
  Action.init(ActionSchema, Action.config(sequelize));
  Role.init(RoleSchema, Role.config(sequelize));
  RoleAction.init(
    RoleActionSchema,
    RoleAction.config(sequelize)
  );
  User.init(UserSchema, User.config(sequelize));
  AudioVisualProductList.init(
    AudioVisualProductListSchema,
    AudioVisualProductList.config(sequelize)
  );
  TypeAudioVisualProduct.init(
    TypeAudioVisualProductSchema,
    TypeAudioVisualProduct.config(sequelize)
  );
  AudioVisualProduct.init(
    AudioVisualProductSchema,
    AudioVisualProduct.config(sequelize)
  );
  CategoryAudioVisualProduct.init(
    CategoryAudioVisualProductSchema,
    CategoryAudioVisualProduct.config(sequelize)
  );
  TypeAudioVisualProduct.init(
    TypeAudioVisualProductSchema,
    TypeAudioVisualProduct.config(sequelize)
  );
  CategoryAudioVisualProduct.init(
    CategoryAudioVisualProductSchema,
    CategoryAudioVisualProduct.config(sequelize)
  );
  AudioVisualProduct.init(
    AudioVisualProductSchema,
    AudioVisualProduct.config(sequelize)
  );
  ItemAudioVisualList.init(
    ItemAudioVisualListSchema,
    ItemAudioVisualList.config(sequelize)
  );

  Module.associate(sequelize.models);
  Action.associate(sequelize.models);
  Role.associate(sequelize.models);
  CategoryAudioVisualProduct.associate(sequelize.models);
  TypeAudioVisualProduct.associate(sequelize.models);
  AudioVisualProduct.associate(sequelize.models);
  AudioVisualProductList.associate(sequelize.models);
  User.associate(sequelize.models);
}

module.exports = setupModels;
