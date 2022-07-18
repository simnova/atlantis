import { Heading, HeadingLevel } from "../../../ui/atoms/heading"

export const AboutRules: React.FC<any> = (_props) => {
    return (
      <>


        <h1>Summary of Rules / Policies</h1>
        <p>Not meant to replace the detailed polices found in co-owner handbook.</p>
        <article>
        <Heading level={HeadingLevel.H5}>Parking:</Heading>
        <p>
        Registration Fee $40.00 
        </p>


        </article>

        <article>
        <Heading level={HeadingLevel.H5}>Trash Chute:</Heading>
        <p>
        Located on the north end of each floor of the building, the trash chute is a secure and easy way to throw away household trash. 
        
        Do not use the trash chute outside of the hours of 8:00 AM to 10:00 PM.

        All trash needs to be bagged and placed in the trash chute.

        Larger items should be placed in the ground level dumpsters. To optimize space and ensure availability for other co-owners and guests, boxes should be broken down.

        If a co-owner is renovating their property, they should consult the co-owner handbook for more details on how to dispose.
        </p>
        </article>


        <article>
        <Heading level={HeadingLevel.H5}>Pets / Dog Lot:</Heading>
        <p>
        ONLY “Co-Owners” are allowed to bring their pets to the
        property. After using the pet area please be sure to pick up your “fur baby’s” messes.
        Please keep your pups leashed at all times and, be VERY MINDFUL when exiting the

        elevators/lobbies with your dogs. Other dogs may be at your elevator stop and, fights can
        happen. Dogs that exhibit aggression towards people cannot be tolerated.
        </p>


        </article>

      </>
    )
  }

