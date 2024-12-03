import useApi from "@/composables/useApi";

const showAll = async() => {
  try {
    return await useApi.getInstance("usuarios").showAll();
  } catch (e) {
    console.log(e)
  }
}

const remove = async(docs) => {
  try {
    return await useApi.getInstance('usuarios').delete(docs)
  } catch (error) {
    console.log(error)
  }
}
const show = (id) => {}
const update = async(data) => {
  try {
    return await useApi.getInstance("usuarios").update(data);
  } catch (e) {
    console.log(e)
  }
}

const create = async(data) => {
  try {
    return await useApi.getInstance("usuarios").add(data);
  } catch (e) {
    console.log(e)
  }
}

export { showAll, remove, show, update, create }