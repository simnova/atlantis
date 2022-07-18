import { Heading, HeadingLevel } from "../../../ui/atoms/heading"

export const VisitingCheckIn: React.FC<any> = (_props) => {
  return (
    <>
      <Heading level={HeadingLevel.H1}>Checking In at the Atlantis:</Heading>

      <div>
        All visitors must check-in with security before staying at the Atlantis.<br/>
        

        The security office is located under the building.
      </div>
    </>
  )
}