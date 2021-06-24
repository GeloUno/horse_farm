import { getByTestId, screen, render, fireEvent, waitFor } from '@testing-library/react';
import Attractions from "./Attractions";
import { dataAtractions } from '../utility/dataAtractons';




describe('Attraction component', () => {
  it('should start with first title attraction', () => {
    const { getByTestId } = render(<Attractions />)

    expect(getByTestId('attractionTitle')).toBeInTheDocument()
    expect(getByTestId('attractionTitle')).toBeVisible()
    expect(getByTestId('attractionTitle')).toHaveTextContent(`${dataAtractions[0].titleRegular}` + `${dataAtractions[0].titleBold}`)
  })

  it('should have backgroud text', () => {
    const { getByTestId } = render(<Attractions />)

    expect(getByTestId('backgroundText')).toBeInTheDocument()
    expect(getByTestId('backgroundText')).toBeVisible()
    expect(getByTestId('backgroundText')).toHaveTextContent(`${dataAtractions[0].backgroundText}`)
  })

  it('should start with first description attraction', () => {
    const { getByTestId } = render(<Attractions />)

    expect(getByTestId('attractionDescription')).toBeInTheDocument()
    expect(getByTestId('attractionDescription')).toBeVisible()
    expect(getByTestId('attractionDescription')).toHaveTextContent(`${dataAtractions[0].description}`)
  })
  it('button next should be visibility', () => {
    const { getByTestId } = render(<Attractions />)

    expect(getByTestId('attractionNextButton')).toBeInTheDocument()
    expect(getByTestId('attractionNextButton')).toBeVisible()
    expect(getByTestId('attractionNextButton')).toHaveTextContent(`Dalej`)
  })
  it('image attraction should be visibility and check source', () => {
    const { getByTestId } = render(<Attractions />)

    expect(getByTestId('attractionImg')).toBeInTheDocument()
    expect(getByTestId('attractionImg')).toBeVisible()
    expect(getByTestId('attractionImg')).toHaveAttribute('src', dataAtractions[0].image)
  })

  it('should switch to next attraction after press button', async () => {
    const { getByTestId } = render(<Attractions />)

    fireEvent.click(getByTestId('attractionNextButton'))

    const nextDescription = await waitFor(() => {
      return getByTestId('attractionDescription')
    })
    expect(nextDescription).toBeInTheDocument()
    expect(nextDescription).toBeInTheDocument()
    expect(nextDescription).toHaveTextContent(dataAtractions[1].description)

  })
});
describe('Attractions loop all data by press button next', () => {

  it('should switch to next description, title,src, background text, attraction after press button', async () => {
    const { getByTestId } = render(<Attractions />)

    for (const data of dataAtractions) {

      const dataDiscrioption = await waitFor(() => getByTestId('attractionDescription'))

      const dataTitle = await waitFor(() => getByTestId('attractionTitle'))

      const dataBackgroundText = await waitFor(() => getByTestId('backgroundText'))

      const dataImg = await waitFor(() => getByTestId('attractionImg'))

      expect(dataDiscrioption).toBeInTheDocument()
      expect(dataDiscrioption).toBeVisible()
      expect(dataDiscrioption).toHaveTextContent(data.description)

      expect(dataTitle).toBeInTheDocument()
      expect(dataTitle).toBeVisible()
      expect(dataTitle).toHaveTextContent(`${data.titleRegular}${data.titleBold}`)

      expect(dataBackgroundText).toBeInTheDocument()
      expect(dataBackgroundText).toBeVisible()
      expect(dataBackgroundText).toHaveTextContent(data.backgroundText)

      expect(dataImg).toBeInTheDocument()
      expect(dataImg).toBeVisible()
      expect(dataImg).toHaveAttribute(`src`, `${data.image}`)

      fireEvent.click(getByTestId('attractionNextButton'))
    }
  })

  it('should back to data zero after full loop', () => {
    const { getByTestId } = render(<Attractions />)

    for (const data of dataAtractions) {
      fireEvent.click(getByTestId('attractionNextButton'))
    }

    expect(getByTestId('attractionDescription')).toHaveTextContent(dataAtractions[0].description)

    expect(getByTestId('attractionTitle')).
      toHaveTextContent(`${dataAtractions[0].titleRegular}` + `${dataAtractions[0].titleBold}`)

    expect(getByTestId('backgroundText')).toBeInTheDocument()
    expect(getByTestId('backgroundText')).toBeVisible()
    expect(getByTestId('backgroundText')).toHaveTextContent(dataAtractions[0].backgroundText)

    expect(getByTestId('attractionImg')).toHaveAttribute('src', dataAtractions[0].image)
  })
});

describe('Attractions button carousel press', () => {

  it(`should change data after press third button carousel`, async () => {

    const { getByTestId } = render(<Attractions />)

    fireEvent.click(getByTestId(`buttonNumberAtraction-2`))

    expect(getByTestId(`attractionDescription`)).toBeInTheDocument()
    expect(getByTestId(`attractionDescription`)).toBeValid()
    expect(getByTestId(`attractionDescription`)).toHaveTextContent(dataAtractions[2].description)

    expect(getByTestId('attractionTitle')).
      toHaveTextContent(`${dataAtractions[2].titleRegular}` + `${dataAtractions[2].titleBold}`)

    expect(getByTestId('backgroundText')).toBeInTheDocument()
    expect(getByTestId('backgroundText')).toBeVisible()
    expect(getByTestId('backgroundText')).toHaveTextContent(dataAtractions[2].backgroundText)

    expect(getByTestId('attractionImg')).toHaveAttribute('src', dataAtractions[2].image)
  })

  it(`should change data after press second button carousel`, async () => {

    const { getByTestId } = render(<Attractions />)

    fireEvent.click(getByTestId(`buttonNumberAtraction-1`))

    expect(getByTestId(`attractionDescription`)).toBeInTheDocument()
    expect(getByTestId(`attractionDescription`)).toBeValid()
    expect(getByTestId(`attractionDescription`)).toHaveTextContent(dataAtractions[1].description)

    expect(getByTestId('attractionTitle')).
      toHaveTextContent(`${dataAtractions[1].titleRegular}` + `${dataAtractions[1].titleBold}`)

    expect(getByTestId('backgroundText')).toBeInTheDocument()
    expect(getByTestId('backgroundText')).toBeVisible()
    expect(getByTestId('backgroundText')).toHaveTextContent(dataAtractions[1].backgroundText)

    expect(getByTestId('attractionImg')).toHaveAttribute('src', dataAtractions[1].image)
  })

  it(`should change data after press first button carousel`, async () => {

    const { getByTestId } = render(<Attractions />)

    fireEvent.click(getByTestId(`buttonNumberAtraction-0`))

    expect(getByTestId(`attractionDescription`)).toBeInTheDocument()
    expect(getByTestId(`attractionDescription`)).toBeValid()
    expect(getByTestId(`attractionDescription`)).toHaveTextContent(dataAtractions[0].description)

    expect(getByTestId('attractionTitle')).
      toHaveTextContent(`${dataAtractions[0].titleRegular}` + `${dataAtractions[0].titleBold}`)

    expect(getByTestId('backgroundText')).toBeInTheDocument()
    expect(getByTestId('backgroundText')).toBeVisible()
    expect(getByTestId('backgroundText')).toHaveTextContent(dataAtractions[0].backgroundText)

    expect(getByTestId('attractionImg')).toHaveAttribute('src', dataAtractions[0].image)
  })

  it(`should change data after press fourth button carousel`, async () => {

    const { getByTestId } = render(<Attractions />)

    fireEvent.click(getByTestId(`buttonNumberAtraction-3`))

    expect(getByTestId(`attractionDescription`)).toBeInTheDocument()
    expect(getByTestId(`attractionDescription`)).toBeValid()
    expect(getByTestId(`attractionDescription`)).toHaveTextContent(dataAtractions[3].description)

    expect(getByTestId('attractionTitle')).
      toHaveTextContent(`${dataAtractions[3].titleRegular}` + `${dataAtractions[3].titleBold}`)

    expect(getByTestId('backgroundText')).toBeInTheDocument()
    expect(getByTestId('backgroundText')).toBeVisible()
    expect(getByTestId('backgroundText')).toHaveTextContent(dataAtractions[3].backgroundText)

    expect(getByTestId('attractionImg')).toHaveAttribute('src', dataAtractions[3].image)
  })
  it(`should change data after press fifth button carousel`, async () => {

    const { getByTestId } = render(<Attractions />)

    fireEvent.click(getByTestId(`buttonNumberAtraction-4`))

    expect(getByTestId(`attractionDescription`)).toBeInTheDocument()
    expect(getByTestId(`attractionDescription`)).toBeValid()
    expect(getByTestId(`attractionDescription`)).toHaveTextContent(dataAtractions[4].description)

    expect(getByTestId('attractionTitle')).
      toHaveTextContent(`${dataAtractions[4].titleRegular}` + `${dataAtractions[4].titleBold}`)

    expect(getByTestId('backgroundText')).toBeInTheDocument()
    expect(getByTestId('backgroundText')).toBeVisible()
    expect(getByTestId('backgroundText')).toHaveTextContent(dataAtractions[4].backgroundText)

    expect(getByTestId('attractionImg')).toHaveAttribute('src', dataAtractions[4].image)
  })
})

