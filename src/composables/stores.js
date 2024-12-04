import useApi from "@/composables/useApi";

const handleApiCall = async (apiCall) => {
  try {
    return await apiCall();
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

const showAll = () => handleApiCall(() => useApi.getInstance("stores").showAll());

const remove = (docs) => handleApiCall(() => useApi.getInstance("stores").delete(docs));

const update = (data) => handleApiCall(() => useApi.getInstance("stores").update(data));

const create = (data) => handleApiCall(() => useApi.getInstance("stores").add(data));


export { showAll, remove, update, create };