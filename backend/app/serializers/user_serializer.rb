class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :created_at, :updated_at
end
