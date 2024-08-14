import React from 'react';
import { Table } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const MovementsTable = () => {
    const { t, i18n } = useTranslation();
    return(
        <Table>
            <thead>
                <tr>
                    <th colSpan={2}>
                        {t('movements')}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th>
                        {t('expenses')}
                    </th>
                    <th>
                        {t('income')}
                    </th>
                </tr>
            </tbody>
        </Table>
    );
}

export default MovementsTable;