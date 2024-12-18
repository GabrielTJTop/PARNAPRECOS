import useApi from "@/composables/useApi";

const handleApiCall = async (apiCall) => {
  try {
    return await apiCall();
  } catch (error) {
    console.error("API call failed:", error);
    throw error;
  }
};

const showAll = () => handleApiCall(() => useApi.getInstance("products").showAll());

const remove = (docs) => handleApiCall(() => useApi.getInstance("products").delete(docs));

const update = (data) => handleApiCall(() => useApi.getInstance("products").update(data));

const create = (data) => handleApiCall(() => useApi.getInstance("products").add(data));


export { showAll, remove, update, create };