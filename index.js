var recipes = {}

function updateObjectWithKeyAndValue(recipes, key, value){
  return Object.assign({}, recipes, {[key]: value})

}

function destructivelyUpdateObjectWithKeyAndValue(recipes, key, value){
  recipes[key]= value
  return recipes
}

function deleteFromObjectByKey(recipes, key){
  return Object.assign({},recipes, {[key]: value})
  return delete recipes[key]
}

function destructivelyDeleteFromObjectByKey(recipes, key){
  delete recipes[key]
  return recipes
}
