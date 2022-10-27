class TrackSerializer < ActiveModel::Serializer
  attributes :id, :album_id, :track_name, :track_duration
end
