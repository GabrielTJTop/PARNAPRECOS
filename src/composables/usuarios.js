import useApi from "@/composables/useApi";

const handleApiCall = async (apiCall) => {
  try {
    return await apiCall();
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

const showAll = () => handleApiCall(() => useApi.getInstance("usuarios").showAll());

const remove = (docs) => handleApiCall(() => useApi.getInstance("usuarios").delete(docs));

const update = (data) => handleApiCall(() => useApi.getInstance("usuarios").update(data));

const create = (data) => handleApiCall(() => useApi.getInstance("usuarios").add(data));

export { showAll, remove, update, create };