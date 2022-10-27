class AlbumSerializer < ActiveModel::Serializer
  attributes :id, :album_name, :genre, :num_tracks, :release_date, :album_image, :label, :album_duration, :deezer_album_id, :artist_name, :artist_image, :deezer_artist_id, :user_id
end
