import { JSX } from "preact";
export const Td = (
  { children, ...props }: JSX.HTMLAttributes<HTMLTableCellElement>,
) => {
  return (
    <td
      class={`relative ${props.class}`}
      style={{
        "verticalAlign": "baseline",
      }}
    >
      {children}
    </td>
  );
};
