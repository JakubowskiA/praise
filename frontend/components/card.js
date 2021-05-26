import styled from '@emotion/styled'

export default function CardComponent ({ title, description, targetImg }) {
  return (
    <Card>
      <div className="descriptionList">
        <h3>{title}</h3>
        <p>{description}</p>
        </div>
        <img src={targetImg}/>
    </Card>
  )
}

const Card = styled('div')`
    padding: 18px 18px 24px;
    text-align: left;
    text-decoration: none;
    color: #434343;
    border: 1px solid #9b9b9b;
    border-radius: 4px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: row;

  &:hover {
    border-color: #067df7;
  }

   h3 {
    margin: 0;
    color: #067df7;
    font-size: 18px;
  }

   p {
    margin: 0;
    padding: 12px 0 0;
    font-size: 13px;
    color: #333;
  }

   img {
    width: 100px;
    margin-left: 20px;
  }

  .descriptionList {
    display: flex;
    flex-direction: column;
    width: 90%;
  }
`