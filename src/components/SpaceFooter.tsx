import React from 'react'
import { Footer, types} from "@kokitotsos/react-components"
import styled from '@emotion/styled';

function SpaceFooter() {

  const BottomFooter = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #718863;
`;

  return (
    <BottomFooter>
    <Footer
    info={{
      city: "Göteborg",
      email: new types.Email("kits@gmail.com"),
      name: "KITS AB",
      phone: new types.PhoneNumber("0708123456"),
      postalCode: new types.PostalCode("4124"),

      social: {
        facebook: new types.Username("kits", types.SocialType.Facebook),
        github: new types.Username("kits", types.SocialType.GitHub),
        keybase: new types.Username("kits", types.SocialType.Keybase),
        twitter: new types.Username("kits", types.SocialType.Twitter),
        linkedin: new types.Username("kits", types.SocialType.LinkedIn),
        microblog: new types.Username(
          "kits",
          types.SocialType.MicroBlog
        ),
      },
      street: "Norra Allégatan 8",
    }}
  />
  </BottomFooter>
  )
}

export default SpaceFooter