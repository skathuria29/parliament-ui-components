/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import React from 'react'
import {
  ActionButton,
  Flex,
  Text,
  View,
  Well,
  TextField
} from '@adobe/react-spectrum'

import Send from '@spectrum-icons/workflow/Send'

import { MethodPicker } from './MethodPicker'
import { RequestParameters } from './RequestParameters'

const RequestMaker = ({ method, url, children, ...props }) => (
  <div {...props}>
    <Well>
      <Flex direction='column' gap='size-100'>
        <Flex direction='row' gap='size-100' width='100%'>
          <MethodPicker method={method} />
          <TextField defaultValue={url} width='100%' />
        </Flex>
        <RequestParameters>{children}</RequestParameters>
        <View>
          <ActionButton>
            <Send />
            <Text>Send</Text>
          </ActionButton>
        </View>
      </Flex>
    </Well>
  </div>
)

RequestMaker.propTypes = {}

export { RequestMaker }