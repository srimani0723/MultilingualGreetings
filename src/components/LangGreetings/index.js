import {useState} from 'react'
import {Box, Button, ButtonsBox, Heading, Img, List} from './styledcomponents'

const LangGreetings = props => {
  const {list} = props
  const [activeOption, setActiveOption] = useState(list[0].id)
  const activeObj = list.filter(each => each.id === activeOption)[0]

  return (
    <Box>
      <Heading>Multilingual Greetings</Heading>
      <ButtonsBox>
        {list.map(each => (
          <List key={each.id}>
            <Button
              type="button"
              active={activeOption === each.id}
              onClick={() => setActiveOption(each.id)}
            >
              {each.buttonText}
            </Button>
          </List>
        ))}
      </ButtonsBox>
      <Img
        src={activeObj.imageUrl}
        alt={activeObj.imageAltText}
        key={activeObj.id}
      />
    </Box>
  )
}

export default LangGreetings
