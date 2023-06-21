import { RingProgress, Text } from "@mantine/core";

const PaginationMui = () => {
  return (
    <RingProgress
      size={70}
      thickness={7}
      roundCaps
      sections={[{ value: 80, color: "#0084C7" }]}
      label={
        <div className=" text-sky-600 text-center">80%</div>
      }
    />
  );
};

export default PaginationMui;
