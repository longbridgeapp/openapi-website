import React from 'react'
import classnames from 'classnames'
import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'
import MDXContent from '@theme/MDXContent'
import EditThisPage from '@theme/EditThisPage'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './sdk-version.module.scss'

function useSdkLanguages() {
  return [
    {
      label: 'Python',
      value: 'python',
    },
    {
      label: 'Rust',
      value: 'rust',
    },
    {
      label: 'Node.js',
      value: 'nodejs',
    },
    {
      label: 'C++',
      value: 'cpp',
    },
  ]
}

export type ISdkVersionProps = {
  versions: Record<string, React.ReactNode>
}
export const SdkVersion: React.FC<ISdkVersionProps> = ({ versions }) => {
  const options = useSdkLanguages()
  const { i18n } = useDocusaurusContext()

  return (
    <div className={classnames(styles.container)}>
      <Tabs className="tabs" values={options} defaultValue={options[0].value}>
        {options.map(({ value }) => {
          const editUrl = `https://github.com/longbridgeapp/openapi-website/edit/main/i18n/${i18n.currentLocale}/sdk-versions/${value}.md`

          return (
            <TabItem value={value} key={value}>
              <div className="flex flex-col items-start justify-start px-3 pb-40">
                <div
                  className="theme-doc-markdown markdown"
                  style={{
                    width: '100%',
                  }}
                >
                  <MDXContent>{versions[value]}</MDXContent>
                  <div className="mt-10">
                    <EditThisPage editUrl={editUrl} />
                  </div>
                </div>
              </div>
            </TabItem>
          )
        })}
      </Tabs>
    </div>
  )
}
