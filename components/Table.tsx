import { JSX } from "preact";

export const Td = (
  { children, ...props }: JSX.HTMLAttributes<HTMLTableCellElement>,
) => {
  return (
    <td
      class={`relative align-baseline ${props.class}`}
    >
      {children}
    </td>
  );
};
