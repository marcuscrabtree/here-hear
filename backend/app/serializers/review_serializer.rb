class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :album_id, :review_text, :review_rating
end
