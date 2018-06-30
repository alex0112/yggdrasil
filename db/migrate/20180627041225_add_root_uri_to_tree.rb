class AddRootUriToTree < ActiveRecord::Migration[5.1]
  def change
    add_column :trees, :root_uri, :string
  end
end
