require "test_helper"

class PokeDogControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get poke_dog_index_url
    assert_response :success
  end
end
