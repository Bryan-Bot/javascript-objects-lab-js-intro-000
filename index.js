var recipes = {
}

function updateObjectsWithKeyAndValue(recipes, key, value){
  return (recipes.assign({}, recipes, {key: value}))

}
}
function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key]= value
  return recipes
}
function deleteFromObjectByKey(recipes, key){

}
function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key]
  return recipes
}
