// @flow

import * as React from 'react';
import Illustration from '@salesforce/design-system-react/components/illustration';

import Login from 'components/header/login';

import svgPath from 'images/no-access.svg';

const NotAllowed = ({
  isLoggedIn,
  message,
  link,
}: {
  isLoggedIn: boolean,
  message: string | null,
  link: React.Node,
}) => (
  <>
    <Illustration
      heading="Restricted Access"
      name="No Access"
      path={`${svgPath}#no-access`}
      size="large"
    />
    {message ? (
      <div className="slds-align_absolute-center">
        <div
          className="slds-text-longform slds-text-body_regular"
          // This message is pre-cleaned by the API
          dangerouslySetInnerHTML={{
            __html: message,
          }}
        />
      </div>
    ) : null}
    <div className="slds-align_absolute-center">
      <div className="slds-text-longform slds-text-body_regular">
        {link} or&nbsp;
      </div>
      <Login
        id="product-not-allowed-login"
        label={isLoggedIn ? 'log in with a different org' : 'log in'}
        buttonClassName="slds-p-horizontal_xxx-small"
        buttonVariant="base"
      />
    </div>
  </>
);

export default NotAllowed;