"use client";

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Container from "../Container";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "../ui/button";

const OverviewTable = () => {
    return (
        <Container className="bg-white rounded-xl overflow-y-hidden">
            <Table>
                {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                <TableHeader>
                    <TableRow>
                        <TableHead className="text-center">Order No.</TableHead>
                        <TableHead>Customer</TableHead>
                        <TableHead className="text-center">Total</TableHead>
                        <TableHead></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell className="text-center">329904</TableCell>
                        <TableCell>
                            <p>Thora Tillman</p>
                            <p className="mb-4">lucky.reprint@gmail.com</p>
                        </TableCell>
                        <TableCell className="text-center">
                            <p>$451.80</p>
                        </TableCell>
                        <TableCell>
                            <Button variant="ghost">
                                <ChevronRightIcon />
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-center">329904</TableCell>
                        <TableCell>
                            <p>Thora Tillman</p>
                            <p className="mb-4">lucky.reprint@gmail.com</p>
                        </TableCell>
                        <TableCell className="text-center">
                            <p>$451.80</p>
                        </TableCell>
                        <TableCell>
                            <Button variant="ghost">
                                <ChevronRightIcon />
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-center">329904</TableCell>
                        <TableCell>
                            <p>Thora Tillman</p>
                            <p className="mb-4">lucky.reprint@gmail.com</p>
                        </TableCell>
                        <TableCell className="text-center">
                            <p>$451.80</p>
                        </TableCell>
                        <TableCell>
                            <Button variant="ghost">
                                <ChevronRightIcon />
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-center">329904</TableCell>
                        <TableCell>
                            <p>Thora Tillman</p>
                            <p className="mb-4">lucky.reprint@gmail.com</p>
                        </TableCell>
                        <TableCell className="text-center">
                            <p>$451.80</p>
                        </TableCell>
                        <TableCell>
                            <Button variant="ghost">
                                <ChevronRightIcon />
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell className="text-center">329904</TableCell>
                        <TableCell>
                            <p>Thora Tillman</p>
                            <p className="mb-4">lucky.reprint@gmail.com</p>
                        </TableCell>
                        <TableCell className="text-center">
                            <p>$451.80</p>
                        </TableCell>
                        <TableCell>
                            <Button variant="ghost">
                                <ChevronRightIcon />
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table></Container>

    )
}
export default OverviewTable;
