class CreateShikokus < ActiveRecord::Migration[5.2]
  def change
    create_table :shikokus do |t|
      
      t.string :prefecture_name
      t.string :title
      t.text :caption
      t.float :evaluation

      t.timestamps
    end
  end
end
