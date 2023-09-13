export const usePhotoStore = defineStore("photo", () => {
  interface Photo {
    id: number;
    title: String;
    url: String;
  }

  const photo = ref<Photo>();

  const getPhoto = async (id: number) => {
    // const { data } = await useAsyncGql("getPhoto", { id });

    // photo.value = data.value.photo;

    const result = await GqlGetPhoto({ id });

    photo.value = result.photo;
  };

  return { photo, getPhoto };
});
