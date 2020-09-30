import React from 'react'
import './Blog.css';
import { Layout, Menu, Breadcrumb, Card, Col, Row, Image, Button, Input } from 'antd';
import "antd/dist/antd.css";
import Post from './Post.js';

import { SearchOutlined, DownloadOutlined, InstagramOutlined, FacebookOutlined, MailOutlined, TwitterOutlined, UserOutlined, SmileOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { TextArea } = Input;


const { Header, Content, Footer } = Layout;
const posts = [
    {
        title: "Tarta de manzana",
        image_url: "https://www.recetasdesbieta.com/wp-content/uploads/2019/06/tarta-de-manzana-1-300x169.jpg"
    },
    {
        title: "Pan de almendras",
        image_url: "https://sontushormonas.com/wp-content/uploads/2020/01/pan-almendra.png"
    },
    {
        title: "Carrot Cake",
        image_url: "http://www.apuntodefit.com/wp-content/uploads/2017/04/unnamed_-750x572.jpg"
    }
]
function Blog() {
    return (
        <Layout>
            <Header style={{ background: 'beige' }}>
                <div className="logo" />
                <div class="logoBlog">
                    <img src="https://i.pinimg.com/564x/2a/a3/19/2aa31916294f3350372c6286b3e0a7c6.jpg" width={140} />
                </div>
                <Menu style={{ textAlign: "center", fontSize: 22 }} theme="white" mode="horizontal" defaultSelectedKeys={['2']} >

                    <Menu.Item key="1" >Principal</Menu.Item>
                    <Menu.Item key="2">Recetas</Menu.Item>
                    <Menu.Item key="3">Contacto </Menu.Item>
                    <Menu.Item key="4">Registrarse</Menu.Item>
                    <Button icon={<SearchOutlined />} id="button1">Search</Button>

                    <br></br>
                </Menu>
            </Header>
            <br></br><br></br><br></br>
            <Content style={{ padding: '0 50px', fontFamily: 'cursive', background: 'beige' }}>

                <Breadcrumb style={{ margin: '16px 0' }}>

                    <br></br><br></br><br></br>
                    <Breadcrumb.Item>Principal</Breadcrumb.Item>
                    <Breadcrumb.Item>Recetas</Breadcrumb.Item>
                    <Breadcrumb.Item>Pancakes de avena</Breadcrumb.Item>

                </Breadcrumb>


                <div className="site-layout-content">
                    <h1>Pancakes de avena y banana</h1>
                    <Row>
                        <Col span={16}> <p1>Con esta receta podrás tener no solo los pancakes más deliciosos, sino también más saludables y con ingredientes de calidad. Rinde para una porción. Y lo mejor de todo </p1>
                            <p2>¡¡Son facilísimos!!</p2>
                            <br></br> <br></br>
                            <div id="test5">Ingredientes</div>
                            <br></br>
                            <ul>
                                <li>1 huevo y 2 claras</li>
                                <li>30 gramos de harina de avena (3 cucharadas soperas aproximadamente)</li>
                                <li>1 banana mediana</li>
                                <li>1 cucharadita de canela</li>
                                <li>Edulcorante a gusto</li>
                                <li>Una cucharada sopera de miel (o topic de preferencia)</li>
                            </ul>
                            <br></br> <br></br>
                            <div id="test4">Preparación</div>
                            <br></br>
                            <ol>
                                <li>Batir el huevo con las claras en un molde</li>
                                <li>Hacer pure de media banana</li>
                                <li>Mezclar los huevos con la banana en un recipiente</li>
                                <li>Añadir la avena en polvo a la mezcla (la harina de avena se puede obtener licuando avena)</li>
                                <li>Mezclar todo y precalentar una sartén con un chorro de aceite en spray a 180°</li>
                                <li>Verter la mezcla en la sartén formando los pancakes, y una vez que empiecen a salir burbujitas, girar la mezcla para cocinar ambos lados</li>
                                <li>Apilar los pancakes y poner encima la otra mitad de la banana cortada en rodajitas junto con la miel</li>
                            </ol>
                            <p4>¡A disfrutar los pancakes! </p4>
                            <br></br>
                            <br></br> <br></br>

                            <iframe width="727" height="469" src="https://www.youtube.com/embed/E4zQeLrpHhc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                        </Col>
                        <Col span={8}> <Image
                            width={400}
                            src="https://i0.wp.com/biensabroso.com/wp-content/uploads/Pancake-de-Avena-y-Banano-1.jpg?fit=1024%2C699&ssl=1"
                        />
                            <br></br><br></br><br></br><br></br> <br></br> <br></br>
                            <Card title="Holii! Soy Karen..." extra={<a href="#">More</a>} style={{ width: 400 }}>
                                <div >Soy paraguaya y estudiante universitaria, pero me encanta cocinar comida deliciosa pero en versiones más saludables <SmileOutlined />. Te invito a que sigas mis recetas y compartas con tus amigos!!</div>
                                <div>Cuidate y tomá mucha agüita <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
                                    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
                                </svg> </div>
                                <br></br>
                                <Image
                                    width={350}
                                    src="https://pbs.twimg.com/media/D4cyYlOW4Acuv7K.jpg"
                                />
                            </Card>

                        </Col>
                    </Row>

                    <br></br>
                    <br></br>
                    <div id="test3"  ><strong>Información nutricional</strong></div>
                    <br></br>
                    <table id="table">


                        <tr>
                            <th>Aporte</th>
                            <th>Una porción</th>
                        </tr>
                        <tr>
                            <td>Calorías</td>
                            <td>406 kcal</td>
                        </tr>
                        <tr>
                            <td>Carbohidratos</td>
                            <td>66 g</td>
                        </tr>
                        <tr>
                            <td>Proteína</td>
                            <td>18.5 g</td>
                        </tr>
                        <tr>
                            <td>Grasas totales</td>
                            <td>7.6 g</td>
                        </tr>
                    </table>
                    <br></br>
                    <Button onClick={() => alert("Receta descargada")} type="primary" shape="round" icon={<DownloadOutlined />} size={30}  >
                        Descargar receta  </Button>


                    <br></br> <br></br>
                    <Row>
                        {posts.map(post => {
                            return (
                                <Post post={post} />
                            )
                        })}
                    </Row>
                </div>
                <br></br><br></br><br></br>
                <div id="test9"><svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
                    <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
                </svg>Contame que te pareció!! <svg width="1em" height="1em" fill="currentColor" viewBox="0 0 1024 1024">
                        <path d="M923 283.6c-13.4-31.1-32.6-58.9-56.9-82.8-24.3-23.8-52.5-42.4-84-55.5-32.5-13.5-66.9-20.3-102.4-20.3-49.3 0-97.4 13.5-139.2 39-10 6.1-19.5 12.8-28.5 20.1-9-7.3-18.5-14-28.5-20.1-41.8-25.5-89.9-39-139.2-39-35.5 0-69.9 6.8-102.4 20.3-31.4 13-59.7 31.7-84 55.5-24.4 23.9-43.5 51.7-56.9 82.8-13.9 32.3-21 66.6-21 101.9 0 33.3 6.8 68 20.3 103.3 11.3 29.5 27.5 60.1 48.2 91 32.8 48.9 77.9 99.9 133.9 151.6 92.8 85.7 184.7 144.9 188.6 147.3l23.7 15.2c10.5 6.7 24 6.7 34.5 0l23.7-15.2c3.9-2.5 95.7-61.6 188.6-147.3 56-51.7 101.1-102.7 133.9-151.6 20.7-30.9 37-61.5 48.2-91 13.5-35.3 20.3-70 20.3-103.3 0.1-35.3-7-69.6-20.9-101.9z" />
                    </svg></div>
                <br></br>
                <Row>
                    <Col span={12}>
                        <Input Input size="large" placeholder="Tu nombre" prefix={<UserOutlined />} />
                    </Col>
                    <Col span={12}>
                        <Input Input size="large" placeholder="Tu correo" prefix={<MailOutlined />} />
                    </Col>
                </Row>
                <br></br>
                <TextArea rows={4} />
                <br></br>
                <Button onClick={() => alert("Gracias por tu mensaje!!")} type="primary">
                    Enviar mensaje
        </Button>





            </Content>

            <Footer style={{ fontFamily: 'cursive', background: 'beige' }}>
                <Row>
                    <Col span={12}>
                        <div id="test6">
                            <FacebookOutlined /> Blog de Karenchu
                <br></br>
                            <InstagramOutlined /> @karen_riveros_

                        </div>
                    </Col>
                    <Col span={12}>
                        <div id="test7">
                            <TwitterOutlined /> ri_karenn
                 <br></br>
                            <MailOutlined />karenriveros2000@gmail.com
                 </div>
                    </Col>
                </Row>

                <br></br>
            </Footer>
        </Layout>

    )

}



export default Blog;