import useGetLocation from "../../hooks/useGetLocation";
import { renderHook } from "@testing-library/react";

test("Get location hook is working properly",()=>{
    const {result} = renderHook(useGetLocation);
    expect(result.current).toStrictEqual([
      {},
      "Location isn't supported by this browser",
    ]);
})