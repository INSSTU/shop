export default<T> (url: string) => {
  // 组合式函数就是用组合式api编写的函数
  const data = ref<T | null>(null)
  const loading = ref(true)
  const error = ref<Error | null>(null)

  fetch(import.meta.env.VITE_BASE_API + url)
    .then((res) => res.json())
    .then((json) => (data.value = json))
    .catch((err) => (error.value = err))
    .finally(() => (loading.value = false))

  return { data, loading, error }
}