import React from "react";
import MeasureRender from '../performance/measure/index';
import { Provider } from 'react-redux';

const RootProvider = () => {

  return(
    <MeasureRender name={"RootProvider"}>
      <AuthProvider>
        <Provider store={storeRedux}>
          <BrowserRouter>
            <MaterialUIControllerProvider>
              <ChildApp />
            </MaterialUIControllerProvider>
          </BrowserRouter>
        </Provider>
      </AuthProvider>
    </MeasureRender>
  )
}
export default RootProvider;