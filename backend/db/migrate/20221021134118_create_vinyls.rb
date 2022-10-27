class CreateVinyls < ActiveRecord::Migration[7.0]
  def change
    create_table :vinyls do |t|
      t.date :purchase_date
      t.integer :user_id
      t.integer :album_id

      t.timestamps
    end
  end
end