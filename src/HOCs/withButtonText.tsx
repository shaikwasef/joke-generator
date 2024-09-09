interface propsInterface {
  name: string;
}

export const withButtonText = (ButtonComponent: any): any => {
  return (props: propsInterface) => {
    const handleClick = () => {
      console.log(props.name);
    };

    return (
      <div onClick={handleClick}>
        <ButtonComponent {...props} />
      </div>
    );
  };
};
