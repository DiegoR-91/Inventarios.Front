/* import { userAdapter } from "@/api/adapters/userAdapter";
import { userAtom } from "@/atoms/atoms"; */
import instanceApi from "@/services/instanceApi";
import { useMutation } from "@tanstack/react-query";
/* import { useSetAtom } from "jotai";
import { jwtDecode } from "jwt-decode"; */

export const loginNoSaml = async () => {
  const res = await instanceApi.get(`/PrivUsuarios/NoSaml`, {
    params: { email: "test@lisit.cl" },
  });

  return res.data;
};

const useLoginNoSaml = () => {
  //const setUserData = useSetAtom(userAtom);
  return useMutation({
    mutationFn: loginNoSaml,
    onSuccess: (data) => {
      if (data) {
        //setUserData({ ...userAdapter(jwtDecode(data)), token: data });
        localStorage.setItem("accessToken", data);
        window.location.href = "/home";
      }
    },
    onError: () => {
      //window.location.href = "/login";
    },
  });
};

export default useLoginNoSaml;
