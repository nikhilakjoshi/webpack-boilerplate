import '@/styles/base.css'
import '@/styles/index.css'
import '@/styles/custom.css'
import '@/styles/styles.css'

function main() {
  nytg.budget_array_data = [
    {
      name: 'Alcohol and Tobacco Tax and Trade Bureau',
      positions: {
        total: {
          x: 646,
          y: 386,
        },
        department: {
          x: 810,
          y: 219,
        },
      },
      id: 11,
      budget_2012: 100000,
      change: -0.03,
      budget_2013: 97000,
      department: 'Treasury',
      discretion: 'Discretionary',
    },
  ]
  const navbar = '.nytg-navBar'
  // $j(navbar).addClass('hidden')
  dropFileToUpload()
}

function dropFileToUpload() {
  const container = $j('#file-drop-area')
  const fileInput = $j('#excel-file-input')

  container.addClass('hidden')
  container.on('click', function () {
    fileInput.trigger('click')
  })
}

main()
