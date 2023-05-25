import { useMutation, useQueryClient } from "react-query";
import { patchCart } from "../apis/cart";

export function useMutateCart() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: patchCart,
    onSuccess() {
      queryClient.invalidateQueries("cart");
    },
  });
  const onChangeQuantity = (id: number, quantity: number) => {
    mutation.mutate({ id, quantity });
  };
  return { onChangeQuantity };
}
