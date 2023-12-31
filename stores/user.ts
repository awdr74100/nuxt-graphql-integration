export const useUserStore = defineStore("user", () => {
  interface User {
    id: number;
    name: string;
    email: string;
    website: string;
  }

  const user = ref<User>();

  const getUser = async (id: number) => {
    const { data } = await useAsyncGql("getUser", { id });

    user.value = data.value.user;

    // const result = await GqlGetUser({ id });

    // user.value = result.user;
  };

  return { user, getUser };
});
