import React from 'react';

import DefaultOverlayContent from '../DefaultOverlayContent'
import {ModelsWrapper,ModelSection} from '../Model/'

import { Container } from './styles';

const Page: React.FC = () => {
  return (
      <Container>
          <ModelsWrapper>
            <div>
              {[
                'Model One',
                'Model Two',
                'Model Three',
                'Model For',
                'Model Five',
                'Model Six',
                'Model Seven'
              ].map(modelName =>(
                <ModelSection
                key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={"Model One"}
                  description="Order Online for Delivery"
                />
              }
              />
              ))}
              
            </div>
          </ModelsWrapper>
      </Container>
  )
}

export default Page;