class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.integer :user_id
      t.integer :album_id
      t.string :review_text
      t.integer :review_rating

      t.timestamps
    end
  end
end