import style from "styled-components";

interface Props {
  name: string
}

const TopicArea = style.a`
  display: inline-block;
  background-color: transparent;
  border-radius: 10px;
  padding: 2px 10px;
  color: #111;
  border: 1px solid #484848;
  transition: all 0.2s 0s linear;
  &:hover {
    color: #fff;
    background-color: #484848;
    text-decoration: none;
  }
`;

export const Topic = (props: Props) => {
  return (
    <TopicArea target={"_blank"} href={`https://github.com/topics/${props.name}`} className="mr-1 mt-1">{props.name}</TopicArea>
  );
}
