// 商品信息
interface Product{
  id: number
  name: string
  description: string
  price: number
  stock: number //库存
  image_url: string
  category_id: number
}

// 分页信息
interface Page<T>{
  data: Array<T>
  totalItems: number  //总记录数
  totalPage: number  //总页数
  currentPage: number  //当前页码
  itemsPerPages: number  //每页显示的商品数
}