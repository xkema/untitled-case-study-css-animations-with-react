interface Feature {
  id: string;
  name: string;
  title: string;
  description: string;
  link: string;
}

export type FeatureProps = { feature: Feature };

const features: Feature[] = [
  {
    id: '825cc467',
    name: 'Lorem Ipsum 01' /* Document Scanner */,
    title: 'Repellat Hic Quas' /* Scan with Ease */,
    description:
      'Atque magni in quisquam adipisci cum natus, obcaecati quod quasi cupiditate tempore, sapiente inventore, impedit nesciunt.' /* Scan any document instantly with your mobile device by just a few steps. Save as PDF,JPG,ZIP,TXT and Word format. */,
    link: '#',
  },
  {
    id: '63023138',
    name: 'Dolor 02' /* Sign & Stamp */,
    title: 'Nesciunt in Soluta' /* One-Tap Focus */,
    description:
      'Enim placeat error quos accusantium cumque autem voluptatibus culpa suscipit explicabo repellendus. Numquam odio totam dolor dolorum voluptas impedit at.' /* Draw, scan or import your signature and stamp with a simple touch. Sign and stamp any document with just a single tap! */,
    link: '#',
  },
  {
    id: '6fe926d7',
    name: 'Sit Amet 03' /* Batch Scanning */,
    title: 'Tempora Reprehenderit' /* Multiple Page Scan */,
    description:
      'Alias magni doloribus neque. Corrupti nemo laborum consectetur sint doloremque in placeat facilis, dolores.' /* Scan multiple pages or documents in multiple-scanning mode. Batch all scans as a single document. */,
    link: '#',
  },
  {
    id: '617df559',
    name: 'Consectetur Adipisicing 04' /* Advanced Filters */,
    title: 'Voluptas Repudiandae' /* Unique Filters */,
    description:
      'Quibusdam hic a neque vitae facere, maiores unde quod iste ducimus velit non autem ad officiis harum! Praesentium cumque deleniti tempore dolor aliquid aperiam consectetur eos laborum.' /* Apply advanced filters and enhance quality with various custom made filters. Manually edit brightness and contrast by your own choice on the custom filters. */,
    link: '#',
  },
  {
    id: 'c8ce03e8',
    name: 'Elit Atque 05' /* Export & Share */,
    title: 'Nulla Lere' /* All-Round Conversion */,
    description:
      'Eum cupiditate itaque quasi ullam illum quidem corrupti nesciunt sapiente consequatur.' /* Export your scans as PDF,JPG,ZIP,TXT and Word. */,
    link: '#',
  },
];

export { features };
