class VinylSerializer < ActiveModel::Serializer
  attributes :id, :purchase_date, :user_id, :album_id
end
