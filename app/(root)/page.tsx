import Collections from "@/components/Collections";
import ProductList from "@/components/ProductList";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Image
        src='/banner0.png'
        alt='banner'
        width={2000}
        height={1000}
        className='w-screen'
      />
      <Collections />
      <ProductList />

      <section className='py-12 bg-gradient-to-r from-yellow-400 to-fuchsia-600 sm:py-16 lg:py-24'>
        <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
          <div className='max-w-2xl mx-auto text-left sm:text-center'>
            <h2 className='text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight'>
              Bienvenue sur notre site Internet,
            </h2>
            <p className='mt-4 text-xl text-white font-bold'>
              “ Chez nous, c'est vous qui portez la couronne.”
            </p>
          </div>

          <div className='grid grid-cols-1 gap-6 mt-8 sm:mt-12 xl:mt-20 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:gap-14'>
            <div className='bg-white'>
              <div className='py-8 px-9'>
                <p className='text-lg font-bold text-black'>SIMONE KADJO</p>
                <p className='mt-1 text-gray-600 text-500'>
                  CEO chez mesmeches
                </p>
                <p className='mt-6 text-base text-gray-700'>
                  je m'appelle Simone passionné de l'entreprenariat et CEO de la
                  compagnie Mes mèches. Notre but est de vous ouvrir des
                  produits de qualité avec différents choix pour mieux vous
                  servir tout en ayant un prix abordable.
                </p>
              </div>
            </div>
            <div className='bg-white'>
              <div className='py-8 px-9'>
                <p className='text-lg font-bold text-black'>Emmanuel kouadio</p>
                <p className='mt-1 text-gray-600 text-500'>
                  Logistique & informatique
                </p>
                <p className='mt-6 text-base text-gray-700'>
                  Emmanuel Kouadio est un professionnel avec une expérience
                  significative dans la gestion des opérations pour les
                  entreprises et le software engenieering
                </p>
              </div>
            </div>

            <div className='bg-white'>
              <div className='py-8 px-9'>
                <p className='text-lg font-bold text-black'> AMA</p>
                <p className='mt-1 text-gray-600 text-500'>
                  {" "}
                  Responsable achats chez mesmeches
                </p>
                <p className='mt-6 text-base text-gray-700'>
                  AMA est responsable des achats chez Mesmeches, une entreprise
                  spécialisée dans la distribution de produits cosmétiques. Avec
                  assez d'expérience dans le domaine des achats, AMA est
                  responsable de la gestion des fournisseurs, de la négociation
                  des contrats d'approvisionnement et de l'optimisation des
                  coûts.
                </p>
              </div>
            </div>

            <div className='bg-white'>
              <div className='py-8 px-9'>
                <p className='text-lg font-bold text-black'>AGNES KOUAME </p>
                <p className='mt-1 text-gray-600 text-500'>
                  Responsable Exportation
                </p>
                <p className='mt-6 text-base text-gray-700'>
                  Agnès est responsable de l'exportation chez mesmeches Avec son
                  expertise dans la logistique et la gestion des expéditions,
                  Agnès veille à ce que les produits soient livrés efficacement
                  et en toute sécurité à destination.
                </p>
              </div>
            </div>

            <div className='bg-white'>
              <div className='py-8 px-9'>
                <p className='text-lg font-bold text-black'>Epicerie Timela</p>
                <p className='mt-1 text-gray-600 text-500'>Distributeur</p>
                <p className='mt-6 text-base text-gray-700'>
                  Epicerie Timela est un distributeur local de produits
                  alimentaires et d'épicerie fine. l'entreprise s'engage à
                  fournir à ses clients des produits de qualité supérieure
                  provenant de fournisseurs locaux et internationaux.
                </p>
              </div>
            </div>

            <div className='bg-white'>
              <div className='py-8 px-9'>
                <p className='text-lg font-bold text-black'>Afri'kici</p>
                <p className='mt-1 text-gray-600 text-500'>
                  distributeur en ligne
                </p>
                <p className='mt-6 text-base text-gray-700'>
                  Afri'kici est une plateforme de commerce électronique
                  spécialisée dans la vente de produits africains. Fondée par
                  des passionnés de l'art et de la culture africaine, Afri'kici
                  relie les artisans locaux aux consommateurs du monde entier,
                  offrant ainsi une vitrine mondiale à leurs créations uniques.
                </p>
              </div>
            </div>

            <div className='bg-white'>
              <div className='py-8 px-9'>
                <p className='text-lg font-bold text-black'>Anka</p>
                <p className='mt-1 text-gray-600 text-500'>
                  distributeur en ligne
                </p>
                <p className='mt-6 text-base text-gray-700'>
                  Anka est une entreprise de distribution en ligne qui se
                  spécialise dans la vente de produits électroniques et
                  technologiques. Avec une sélection variée de produits de haute
                  qualité et un service clientèle exceptionnel, Anka s'efforce
                  de satisfaire les besoins de ses clients en matière de
                  technologie.
                </p>
              </div>
            </div>
          </div>
          <section className='py-12 bg-gradient-to-r from-yellow-400 to-fuchsia-600 '>
            <div className='px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl'>
              <div className='text-center xl:flex xl:items-center xl:justify-between xl:text-left'>
                <div className='xl:flex xl:items-center xl:justify-start'>
                  <p className='mt-5 text-sm text-white xl:ml-6 xl:mt-0'>
                    © Copyright 2024
                  </p>
                </div>

                <div className='items-center mt-8 xl:mt-0 xl:flex xl:justify-end xl:space-x-8'>
                  <ul className='flex flex-wrap items-center justify-center gap-x-8 gap-y-3 xl:justify-end'>
                    <li>
                      <a
                        href='#'
                        title=''
                        className='text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80'
                      >
                        {" "}
                        A Propos{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href='#'
                        title=''
                        className='text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80'
                      >
                        {" "}
                        Services{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href='#'
                        title=''
                        className='text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80'
                      >
                        {" "}
                        Privacy Policy{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href='#'
                        title=''
                        className='text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80'
                      >
                        {" "}
                        Terms & Conditions{" "}
                      </a>
                    </li>

                    <li>
                      <a
                        href='#'
                        title=''
                        className='text-sm text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80'
                      >
                        {" "}
                        Support{" "}
                      </a>
                    </li>
                  </ul>

                  <div className='w-full h-px mt-8 mb-5 xl:w-px xl:m-0 xl:h-6 bg-gray-50/20'></div>

                  <ul className='flex items-center justify-center space-x-8 xl:justify-end'>
                    <li>
                      <a
                        href='#'
                        title=''
                        className='block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80'
                      >
                        <svg
                          className='w-6 h-6'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                        >
                          <path d='M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z'></path>
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        href='#'
                        title=''
                        className='block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80'
                      >
                        <svg
                          className='w-6 h-6'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                        >
                          <path d='M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z'></path>
                        </svg>
                      </a>
                    </li>

                    <li>
                      <a
                        href='#'
                        title=''
                        className='block text-white transition-all duration-200 hover:text-opacity-80 focus:text-opacity-80'
                      >
                        <svg
                          className='w-6 h-6'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 24 24'
                          fill='currentColor'
                        >
                          <path d='M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z'></path>
                          <circle cx='16.806' cy='7.207' r='1.078'></circle>
                          <path d='M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z'></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export const dynamic = "force-dynamic";
