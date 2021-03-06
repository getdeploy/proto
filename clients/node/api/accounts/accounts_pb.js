// source: api/accounts/accounts.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
goog.exportSymbol('proto.api.accounts.Account', null, global);
goog.exportSymbol('proto.api.accounts.CreateRequest', null, global);
goog.exportSymbol('proto.api.accounts.CreateResponse', null, global);
goog.exportSymbol('proto.api.accounts.GetRequest', null, global);
goog.exportSymbol('proto.api.accounts.GetResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.accounts.Account = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, 500, null, null);
};
goog.inherits(proto.api.accounts.Account, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.accounts.Account.displayName = 'proto.api.accounts.Account';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.accounts.CreateRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.accounts.CreateRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.accounts.CreateRequest.displayName = 'proto.api.accounts.CreateRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.accounts.CreateResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.accounts.CreateResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.accounts.CreateResponse.displayName = 'proto.api.accounts.CreateResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.accounts.GetRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.api.accounts.GetRequest.repeatedFields_, null);
};
goog.inherits(proto.api.accounts.GetRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.accounts.GetRequest.displayName = 'proto.api.accounts.GetRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.api.accounts.GetResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.api.accounts.GetResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.api.accounts.GetResponse.displayName = 'proto.api.accounts.GetResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.accounts.Account.prototype.toObject = function(opt_includeInstance) {
  return proto.api.accounts.Account.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.accounts.Account} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.accounts.Account.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    email: jspb.Message.getFieldWithDefault(msg, 2, ""),
    realName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    createdAt: (f = msg.getCreatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    updatedAt: (f = msg.getUpdatedAt()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.accounts.Account}
 */
proto.api.accounts.Account.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.accounts.Account;
  return proto.api.accounts.Account.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.accounts.Account} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.accounts.Account}
 */
proto.api.accounts.Account.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRealName(value);
      break;
    case 1000:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setCreatedAt(value);
      break;
    case 1001:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setUpdatedAt(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.accounts.Account.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.accounts.Account.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.accounts.Account} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.accounts.Account.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRealName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCreatedAt();
  if (f != null) {
    writer.writeMessage(
      1000,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getUpdatedAt();
  if (f != null) {
    writer.writeMessage(
      1001,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
};


/**
 * optional string id = 1;
 * @return {string}
 */
proto.api.accounts.Account.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.accounts.Account} returns this
 */
proto.api.accounts.Account.prototype.setId = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string email = 2;
 * @return {string}
 */
proto.api.accounts.Account.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.accounts.Account} returns this
 */
proto.api.accounts.Account.prototype.setEmail = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string real_name = 3;
 * @return {string}
 */
proto.api.accounts.Account.prototype.getRealName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.accounts.Account} returns this
 */
proto.api.accounts.Account.prototype.setRealName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional google.protobuf.Timestamp created_at = 1000;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.accounts.Account.prototype.getCreatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1000));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.accounts.Account} returns this
*/
proto.api.accounts.Account.prototype.setCreatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 1000, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.accounts.Account} returns this
 */
proto.api.accounts.Account.prototype.clearCreatedAt = function() {
  return this.setCreatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.accounts.Account.prototype.hasCreatedAt = function() {
  return jspb.Message.getField(this, 1000) != null;
};


/**
 * optional google.protobuf.Timestamp updated_at = 1001;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.api.accounts.Account.prototype.getUpdatedAt = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1001));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.api.accounts.Account} returns this
*/
proto.api.accounts.Account.prototype.setUpdatedAt = function(value) {
  return jspb.Message.setWrapperField(this, 1001, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.accounts.Account} returns this
 */
proto.api.accounts.Account.prototype.clearUpdatedAt = function() {
  return this.setUpdatedAt(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.accounts.Account.prototype.hasUpdatedAt = function() {
  return jspb.Message.getField(this, 1001) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.accounts.CreateRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.accounts.CreateRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.accounts.CreateRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.accounts.CreateRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    githubAccessToken: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.accounts.CreateRequest}
 */
proto.api.accounts.CreateRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.accounts.CreateRequest;
  return proto.api.accounts.CreateRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.accounts.CreateRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.accounts.CreateRequest}
 */
proto.api.accounts.CreateRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setGithubAccessToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.accounts.CreateRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.accounts.CreateRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.accounts.CreateRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.accounts.CreateRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getGithubAccessToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string github_access_token = 1;
 * @return {string}
 */
proto.api.accounts.CreateRequest.prototype.getGithubAccessToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.api.accounts.CreateRequest} returns this
 */
proto.api.accounts.CreateRequest.prototype.setGithubAccessToken = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.accounts.CreateResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.accounts.CreateResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.accounts.CreateResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.accounts.CreateResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    account: (f = msg.getAccount()) && proto.api.accounts.Account.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.accounts.CreateResponse}
 */
proto.api.accounts.CreateResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.accounts.CreateResponse;
  return proto.api.accounts.CreateResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.accounts.CreateResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.accounts.CreateResponse}
 */
proto.api.accounts.CreateResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.api.accounts.Account;
      reader.readMessage(value,proto.api.accounts.Account.deserializeBinaryFromReader);
      msg.setAccount(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.accounts.CreateResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.accounts.CreateResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.accounts.CreateResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.accounts.CreateResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccount();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.api.accounts.Account.serializeBinaryToWriter
    );
  }
};


/**
 * optional Account account = 1;
 * @return {?proto.api.accounts.Account}
 */
proto.api.accounts.CreateResponse.prototype.getAccount = function() {
  return /** @type{?proto.api.accounts.Account} */ (
    jspb.Message.getWrapperField(this, proto.api.accounts.Account, 1));
};


/**
 * @param {?proto.api.accounts.Account|undefined} value
 * @return {!proto.api.accounts.CreateResponse} returns this
*/
proto.api.accounts.CreateResponse.prototype.setAccount = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.api.accounts.CreateResponse} returns this
 */
proto.api.accounts.CreateResponse.prototype.clearAccount = function() {
  return this.setAccount(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.api.accounts.CreateResponse.prototype.hasAccount = function() {
  return jspb.Message.getField(this, 1) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.api.accounts.GetRequest.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.accounts.GetRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.api.accounts.GetRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.accounts.GetRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.accounts.GetRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    idsList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.accounts.GetRequest}
 */
proto.api.accounts.GetRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.accounts.GetRequest;
  return proto.api.accounts.GetRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.accounts.GetRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.accounts.GetRequest}
 */
proto.api.accounts.GetRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIds(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.accounts.GetRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.accounts.GetRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.accounts.GetRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.accounts.GetRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string ids = 1;
 * @return {!Array<string>}
 */
proto.api.accounts.GetRequest.prototype.getIdsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.api.accounts.GetRequest} returns this
 */
proto.api.accounts.GetRequest.prototype.setIdsList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.api.accounts.GetRequest} returns this
 */
proto.api.accounts.GetRequest.prototype.addIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.api.accounts.GetRequest} returns this
 */
proto.api.accounts.GetRequest.prototype.clearIdsList = function() {
  return this.setIdsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.api.accounts.GetResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.api.accounts.GetResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.api.accounts.GetResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.accounts.GetResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    accountsMap: (f = msg.getAccountsMap()) ? f.toObject(includeInstance, proto.api.accounts.Account.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.api.accounts.GetResponse}
 */
proto.api.accounts.GetResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.api.accounts.GetResponse;
  return proto.api.accounts.GetResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.api.accounts.GetResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.api.accounts.GetResponse}
 */
proto.api.accounts.GetResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = msg.getAccountsMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.api.accounts.Account.deserializeBinaryFromReader, "", new proto.api.accounts.Account());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.api.accounts.GetResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.api.accounts.GetResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.api.accounts.GetResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.api.accounts.GetResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAccountsMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(1, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.api.accounts.Account.serializeBinaryToWriter);
  }
};


/**
 * map<string, Account> accounts = 1;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.api.accounts.Account>}
 */
proto.api.accounts.GetResponse.prototype.getAccountsMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.api.accounts.Account>} */ (
      jspb.Message.getMapField(this, 1, opt_noLazyCreate,
      proto.api.accounts.Account));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.api.accounts.GetResponse} returns this
 */
proto.api.accounts.GetResponse.prototype.clearAccountsMap = function() {
  this.getAccountsMap().clear();
  return this;};


goog.object.extend(exports, proto.api.accounts);
