import * as React from 'react';
import {IAppContext, withAppContext} from "../../../utilities/AppContext";

const SettingsPage = ({appContext}: { appContext: IAppContext }) =>
  (
    <div>
      <h3>{appContext.nav.settingsTabLabel}</h3>
    </div>
  );

export default withAppContext(SettingsPage as React.FunctionComponent);